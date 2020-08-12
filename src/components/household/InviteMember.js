import React from 'react';
import { Button, Form, Loader, Dimmer } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InviteMember = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const stateError = useSelector((state) => state.household.error);
  const loadingState = useSelector((state) => state.household.loading);

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(actions.houseHold.inviteMember(data, props.setModal));
  };
  return loadingState ? (
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  ) : (
    <>
      <section className="items-center justify-center h-full perm-info">
        <h2 className="perm-title">Invite a new member</h2>
        <div className="perm-title-row">
          <p className="w-2/5 text-xs perm-table-title phone:text-sm tablet:text-base tablet:w-1/4">Permission Level</p>
          <p className="w-1/4 text-xs perm-title-one phone:text-sm tablet:text-base">Level 1</p>
          <p className="w-1/4 text-xs perm-title-two phone:text-sm tablet:text-base">Level 2</p>
          <p className="w-1/4 text-xs perm-title-three phone:text-sm tablet:text-base ">Level 3</p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Complete todos</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Create todos</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Edit todos</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">partial</p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Delete todos</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">partial</p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Assign self</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">partial</p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Assign others</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">Invite members</p>
          <p className="w-1/4 text-xs perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">level 1-2</p>
        </div>
      </section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label className="invite-label">
            Please enter the email address of the user you wish to invite
          </label>
          <input
            type="email"
            name="email"
            placeholder="user@email.com"
            ref={register}
          />
          {stateError && <p className={'error'}>{stateError}</p>}
        </Form.Field>
        <Form.Field>
          <label className="invite-label">
            Please choose the permission level of the user you wish to invite
          </label>
          <input
            type="number"
            name="permission_level"
            placeholder="1-3"
            min="1"
            max="3"
            ref={register}
          />
          {stateError && <p className={'error'}>{stateError}</p>}
        </Form.Field>
        <Button type="submit" className="invite-button">
          Invite Member
        </Button>
      </Form>
    </>
  );
};

export default InviteMember;
