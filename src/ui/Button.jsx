export default function Button({ type, children, ...props }) {
    const baseClasses =
      "py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-base md:py-3 md:px-6 md:text-lg lg:text-xl font-semibold rounded-full hover:cursor-pointer transition-colors duration-200";
  
    const variants = {
      dark: "bg-gray-900 text-white hover:bg-slate-200 hover:text-blue-500",
      light: "bg-white text-blue-500 hover:bg-gray-900 hover:text-white",
    };
  
    const classes = `${baseClasses} ${variants[type] || variants.dark}`;
  
    return (
      <button {...props} className={classes}>
        {children}
      </button>
    );
  }
  