function NotificationCard({ title, text }) {
  return (
    <div className="w-5/6 md:w-1/2 h-auto bg-zinc-900 p-2 rounded-xl flex items-center">
      <picture className="p-2">
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="User image"
          className="h-12 w-12 md:h-20 md:w-20 rounded-full"
        />
      </picture>
      <div className="ml-2">
        <h1 className="text-xl text-white font-bold ">{title}</h1>
        <p className="text-base text-white">{text}</p>
      </div>
    </div>
  );
}

export default NotificationCard;
