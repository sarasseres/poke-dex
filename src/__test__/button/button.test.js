import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/Button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

test('renders button correctly', () => {
  const { getByTestId } = render(<Button label='Simpan'></Button>);
  expect(getByTestId('button')).toHaveTextContent('Simpan');
});

test('renders button correctly', () => {
  const { getByTestId } = render(<Button label='Batal'></Button>);
  expect(getByTestId('button')).toHaveTextContent('Batal');
});

test('matches snapshot 1', () => {
  const tree = renderer.create(<Button label='Simpan'></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('matches snapshot 2', () => {
  const tree = renderer.create(<Button label='Batal'></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});