import React from 'react';
import { mount } from 'enzyme';
import TaskRow from '../../components/tasks/TaskRow';

describe('Task Row', () => {
  let taskRowWrapper;
  let showPathOnMap;
  beforeAll(() => {
    showPathOnMap = jest.fn();
    taskRowWrapper = mount(<table><tbody><TaskRow task showPathOnMap={showPathOnMap}/></tbody></table>);
  });

  it('should render the task row with 9 columns describing different details', () => {
    expect(taskRowWrapper.find('td').length).toEqual(9);
  });
  it('should call the show map function if show path button is clicked', () => {
    taskRowWrapper.find('button').simulate('click');
    expect(taskRowWrapper.find('button').length).toEqual(1);
    expect(showPathOnMap).toBeCalled();
  });
  it('should render two addional buttons complete and fail task buttons if status is pending', () => {
    taskRowWrapper = mount(<table><tbody><TaskRow task={ { status: 'pending' }} showPathOnMap={showPathOnMap}/></tbody></table>);
    expect(taskRowWrapper.find('button').length).toEqual(3);
  });
});
