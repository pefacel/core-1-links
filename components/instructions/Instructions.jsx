import { posts } from "../../lib/data";

 

export default function Instructions( ) {
  return (
    <div className="bg-white px-4   pb-20 sm:px-6 lg:px-8  lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title} className="my-4">
              <p className="text-sm text-gray-500">
                <p>{post.level}</p>
              </p>
              <a className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <pre>
                <code className="language-js">{post.code} </code>
              </pre>
              <p className="mt-3 text-base text-gray-900    italic">



                  {post.instruction}
                </p>


             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
