export default function FeatureCard({ icon, title, description }) {
  return (
    <div
      tabIndex={0}
      className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md
                 hover:shadow-xl hover:-translate-y-1
                 focus:outline-none focus:ring-2 focus:ring-sky-400
                 transition"
    >
      <div className="text-sky-500 text-4xl mb-4 flex justify-center group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-center">
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
