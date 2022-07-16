import Head from "next/dist/shared/lib/head";
import Image from "next/dist/client/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="">
      <Head>
        <title>About Page</title>
      </Head>
      <section className="flex flex-col items-center p-5">
        <Image
          src="/assets/me.jpg"
          className="rounded-full shadow-lg shadow-indigo-500/50"
          width={300}
          height="300"
          alt="me"
        />
        <div dir="rtl" className="text-right w-full">
          <h1 className="text-4xl p-5">السلام عليكم</h1>
          <p className="text-xl px-20 pt-5">
            أنا مصطفى قمر، طالب في كلية الطب بجامعة طنطا، وأيضا مبرمج ومصمم
            واجهات أمامية باستخدام React و NextJs. أعشق حل المشكلات وهذا ما
            جذبني للبرمجة في الأصل &#128151;
          </p>
          <p className="text-xl px-20 pb-10">
            هذا الموقع هو التطبيق العملي علي كتاب Grokking Algorithms المشهور عن
            طريق تطبيقها بواسطة لغة JavaScript
          </p>
          <p className="text-xl px-20 pb-10 text-red-400">
            الموقع لم يكتمل بعد، كلما سأقرأ عن خوارزمية جديدة سأبدأ العمل عليها،
            يمكنك الان تصفح الخوارزميات الموجودة من
            <Link href="/">
              <a className=" text-blue-300 hover:text-lime-500 text-2xl">
                {" "}
                هنا{" "}
              </a>
            </Link>
          </p>
          <div className="w-full flex flex-col items-center gap-y-8">
            <span className="text-center block text-3xl">
              تواصل معي الان &#128512;
            </span>
            <div className="flex justify-around justify-self-center w-9/12">
              <a
                href="https://github.com/mostafakamar2308"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  alt="github"
                  width={60}
                  height={60}
                  src="/assets/github.png"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mostafa-kamar/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  alt="Linkedin"
                  width={60}
                  height={60}
                  src="/assets/linkedin.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
