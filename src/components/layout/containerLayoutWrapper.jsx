export const ContainerLayoutWrapper = (props) => {
  return (
    <div
      className=" bg-gradient-to-tr
                  dark:bg-gradient-radial-at-t-sm
                  md:dark:bg-gradient-radial-at-t-md
                  lg:dark:bg-gradient-radial-at-t
                from-pink-300 via-blue-300 to-green-200
                dark:from-yellow-50 dark:via-indigo-900 dark:to-gray-800
                md:dark:from-yellow-50 md:dark:via-indigo-900 md:dark:to-gray-800
                lg:dark:from-yellow-50 lg:dark:via-indigo-900 lg:dark:to-gray-800
                  min-h-screen min-w-max
                  py-12 text-xl font-mono text-white dark:text-gray-300"
    >
      <div>{props.children}</div>
    </div>
  );
};
// colorsample
// bg-gradient-to-tr
// bg-gradient-radial-at-t
// from-white via-white to-gray-300
// from-pink-300 via-blue-300 to-green-200
// dark:from-indigo-700 dark:via-purple-600 dark:to-pink-500

// grid grid-rows-[auto,1fr,auto]
