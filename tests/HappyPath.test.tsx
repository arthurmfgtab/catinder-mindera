import 'react-native';
import React from 'react';
import App from '../App';
import { expect, it, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react-native';

jest.mock('../src/hooks/useFetchCats', () => {
  return require('../tests/mocks/useFetchCats');
});
jest.mock('../src/hooks/useRenderImages', () => {
  return require('../tests/mocks/useRenderImages');
});

it("tests the app's happy path", () => {
  render(<App />);

  expect(screen.getByTestId('premium-area-toggle')).toBeTruthy();

  fireEvent.press(screen.getByTestId('tab-bar-Chats'));
  expect(screen.getByText('Chats screen')).toBeTruthy();

  fireEvent.press(screen.getByTestId('tab-bar-Profile'));
  expect(screen.getByText('Profile screen')).toBeTruthy();

  fireEvent.press(screen.getByTestId('tab-bar-Feed'));
  expect(screen.getByTestId('premium-area-toggle')).toBeTruthy();

  fireEvent.press(screen.getByTestId('premium-area-toggle'));
  expect(screen.getByText('Premium area (?)')).toBeTruthy();
  expect(screen.queryByText('Feed')).toBeFalsy();
  fireEvent.press(screen.getByTestId('premium-area-toggle'));
  expect(screen.getByTestId('premium-area-toggle')).toBeTruthy();
  expect(screen.queryByText('Premium')).toBeFalsy();

  fireEvent.press(screen.getByTestId('like-button'));
  fireEvent.press(screen.getByTestId('discard-button'));
});
