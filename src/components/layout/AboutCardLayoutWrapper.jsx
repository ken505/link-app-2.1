export const AboutCardLayoutWrapper = (props) => {
  return (
    <div
      className="mx-auto mb-8 w-72 min-w-20 px-3 py-7
                border border-gray-100 dark:border-gray-300 rounded-2xl
                flex justify-center items-center 
                hover:backdrop-contrast-125
                dark:backdrop-contrast-75 dark:hover:backdrop-contrast-50"
    >
      <div>{props.children}</div>
    </div>
  );
};
//
// backdrop-filter backdrop-grayscaled backdrop-contrast-200
// dark:backdrop-filter dark:backdrop-blur-md dark:backdrop-contrast-200
