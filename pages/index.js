/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '@components/Layout';
import Cover from '@components/Cover';
import firebase from '../lib/firebase';

export default function Home(props) {
  const bgColor = '#fff';
  const { techs } = props;

  return (
    <Layout>
      <Cover bgColor={bgColor} techs={techs} />
    </Layout>
  );
}

export async function getStaticProps(_context) {
  const res = await firebase.firestore().collection('tech').get();
  const techs = res.docs.map((el) => el.data());

  return {
    props: {
      techs,
    },
    revalidate: 60 * 60 * 24,
  };
}
