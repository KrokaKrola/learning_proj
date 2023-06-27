import React, { useEffect } from 'react';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useDispatch } from 'react-redux';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
