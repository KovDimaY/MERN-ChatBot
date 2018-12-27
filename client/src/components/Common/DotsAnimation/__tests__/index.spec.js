import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import DotsAnimation from '../../DotsAnimation';

jest.mock('../../../Common/Canvas', () => 'Canvas');

const mockComponent = props => (
  <DotsAnimation {...props} />
);

const getContext = () => ({
  clearRect: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
});

describe('components/Common/<DotsAnimation />', () => {
  it('should render component', () => {
    const props = { width: 100, height: 100 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should add listener when componentDidMount is called', () => {
    const addEventListener = jest.fn();
    const instance = mount(mockComponent()).instance();

    document.addEventListener = addEventListener;
    instance.componentDidMount();

    expect(addEventListener).toHaveBeenCalled();
  });

  it('should remove listener when componentWillUnmount is called', () => {
    const removeEventListener = jest.fn();
    const instance = mount(mockComponent()).instance();

    document.removeEventListener = removeEventListener;
    instance.componentWillUnmount();

    expect(removeEventListener).toHaveBeenCalled();
  });

  describe('getOptimalNumberOfDots()', () => {
    it('sould return correct value for a small screen', () => {
      const input = 300;
      const expected = 50;
      const instance = mount(mockComponent()).instance();

      const result = instance.getOptimalNumberOfDots(input);

      expect(result).toBe(expected);
    });

    it('sould return correct value for a medium screen', () => {
      const input = 1000;
      const expected = 100;
      const instance = mount(mockComponent()).instance();

      const result = instance.getOptimalNumberOfDots(input);

      expect(result).toBe(expected);
    });

    it('sould return correct value for a big screen', () => {
      const input = 1500;
      const expected = 150;
      const instance = mount(mockComponent()).instance();

      const result = instance.getOptimalNumberOfDots(input);

      expect(result).toBe(expected);
    });
  });

  describe('updateAnimationState()', () => {
    it('sould update state with the correct values without bouncing', () => {
      const setState = jest.fn();
      const props = { width: 100, height: 100 };
      const dots = [
        {
          x: 10,
          y: 10,
          vx: 100,
          vy: 200,
        },
      ];
      const newDots = [
        {
          x: 20,
          y: 30,
          vx: 100,
          vy: 200,
        },
      ];
      const instance = mount(mockComponent(props)).instance();
      instance.setState = setState;
      instance.state = { dots };
      instance.FPS = 10;

      instance.updateAnimationState();

      expect(setState).toHaveBeenCalledWith({ dots: newDots });
    });

    it('sould update state with the correct values with bouncing', () => {
      const setState = jest.fn();
      const props = { width: 100, height: 100 };
      const dots = [
        {
          x: 90,
          y: 90,
          vx: 300,
          vy: 400,
        },
      ];
      const newDots = [
        {
          x: 100,
          y: 100,
          vx: -300,
          vy: -400,
        },
      ];
      const instance = mount(mockComponent(props)).instance();
      instance.setState = setState;
      instance.state = { dots };
      instance.FPS = 10;

      instance.updateAnimationState();

      expect(setState).toHaveBeenCalledWith({ dots: newDots });
    });
  });

  it('sould update state correctly when handleMouseMove is called', () => {
    const setState = jest.fn();
    const clientX = 'clientX';
    const clientY = 'clientY';
    const event = { clientX, clientY };
    const expectedState = {
      mouse: {
        x: clientX,
        y: clientY,
      },
    };
    const instance = mount(mockComponent()).instance();
    instance.setState = setState;

    instance.handleMouseMove(event);

    expect(setState).toHaveBeenCalledWith(expectedState);
  });

  describe('handleDraw()', () => {
    it('sould execute correctly with small minMouseDistance', () => {
      const ctx = getContext();
      const color = 'red';
      const props = { width: 100, height: 200 };
      const mouse = { x: 50, y: 60 };
      const dots = [
        {
          x: 10,
          y: 10,
          vx: 100,
          vy: 200,
        },
        {
          x: 20,
          y: 400,
          vx: 200,
          vy: 100,
        },
      ];
      const instance = mount(mockComponent(props)).instance();
      instance.minMouseDistance = 1;
      instance.color = color;
      instance.state = { dots, mouse };

      instance.handleDraw(ctx);

      expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, 100, 200);
      expect(ctx.globalCompositeOperation).toBe('lighter');
      expect(ctx.beginPath).toHaveBeenCalled();
      expect(ctx.lineWidth).toBe(0.05);
      expect(ctx.strokeStyle).toBe(color);
      expect(ctx.stroke).toHaveBeenCalled();
    });

    it('sould execute correctly with large minMouseDistance', () => {
      const ctx = getContext();
      const color = 'red';
      const props = { width: 100, height: 200 };
      const mouse = { x: 50, y: 60 };
      const dots = [
        {
          x: 10,
          y: 10,
          vx: 100,
          vy: 200,
        },
        {
          x: 20,
          y: 400,
          vx: 200,
          vy: 100,
        },
      ];
      const instance = mount(mockComponent(props)).instance();
      instance.minMouseDistance = 1000;
      instance.color = color;
      instance.state = { dots, mouse };

      instance.handleDraw(ctx);

      expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, 100, 200);
      expect(ctx.globalCompositeOperation).toBe('lighter');
      expect(ctx.beginPath).toHaveBeenCalled();
      expect(ctx.lineWidth).toBe(0.05);
      expect(ctx.strokeStyle).toBe(color);
      expect(ctx.stroke).toHaveBeenCalled();
    });
  });
});
