import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
const Home: NextPage = () => {
  const { data } = useSession();

  new Date().toISOString();

  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <button onClick={() => signIn()}>로그인</button>
      <button onClick={() => signOut()}>로그아웃</button>
      <img src={data?.user?.image ?? ''} />
      <p>{data?.user?.email}</p>
      <form action="/api/product" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <input name="name" />
        <input name="color" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
