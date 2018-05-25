import React from 'react';
import { shallow } from 'enzyme';
import ListTasksView from '../../components/tasks/ListTasksView';

describe('List Tasks View', () => {
  let listTasksViewWrapper;
  let onSortClick;
  beforeAll(() => {
    onSortClick = jest.fn();
    listTasksViewWrapper = shallow(<ListTasksView tasks={[{ id: 1 }]} onSortClick={onSortClick} totalCount={0}/>);
  });

  it('should render the 9 header columns of the task view', () => {
    expect(listTasksViewWrapper.find('th').length).toEqual(9);
  });
  it('should render 4 sort buttons', () => {
    expect(listTasksViewWrapper.find('a').length).toEqual(4);
  });
  it('should call sort function when any sort button is clicked', () => {
    listTasksViewWrapper.find('a').get(0).props.onClick();
    expect(onSortClick).toBeCalled();
  });
  it('should render the pagination component', () => {
    expect(listTasksViewWrapper.find('Pagination').length).toEqual(1);
  });
  it('should render one Task Row', () => {
    expect(listTasksViewWrapper.find('TaskRow').length).toEqual(1);
  });
});
