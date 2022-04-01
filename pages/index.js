import Head from 'next/head';
import Image from 'next/image';
import ImageCarouselSlider from '../components/carousel';
import TextCarouselSlider from '../components/carousel/text';
import Layout from '../components/layout';
import { demoImages } from '../config/images';
import { demoText } from '../config/text';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <img
          src="/static/demo/person.jpg"
          alt="person"
          width="50%"
          height="300"
          fit={'cover'}
        />
      </div>
      <div className="p-5">
        <p
          style={{ border: '1px solid black', borderRadius: '10px' }}
          className="p-2"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32.
        </p>
      </div>
      <div className="p-3">
        <ImageCarouselSlider images={demoImages} />
      </div>
      <div className="p-5">
        <p
          style={{ border: '1px solid black', borderRadius: '10px' }}
          className="p-2"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32.
        </p>
      </div>
      <div className="p-4 my-2 mx-2" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <TextCarouselSlider text={demoText} />
      </div>
    </Layout>
  );
}
