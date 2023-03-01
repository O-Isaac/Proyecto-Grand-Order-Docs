export default function Policy({ title, description, href }) {

  return (
    <a
      className="relative flex items-start justify-between rounded-xl border dark:bg-slate-100 border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
      href={href}
    >
      <div className=" text-gray-500">
        <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          {description}
        </p>
      </div>
    </a>
  );
}
