import Image from "next/image";

const people = [
  "/assets/img/heroBanner/user1.png",
  "/assets/img/heroBanner/user2.png",
  "/assets/img/heroBanner/user3.png",
];

const UserJoined = () => {
  return (
    <div className="user-joined-wrapper">
      <div className="user-joined-images">
        {people.map((src, index) => (
          <div key={index} className="user-image">
            <Image
              src={src}
              alt={`User ${index + 1}`}
              width={40}
              height={40}
              className="image-avatar"
            />
          </div>
        ))}
      </div>
      <p className="user-joined-count">
        <span>430+</span> Happy Customers
      </p>
    </div>
  );
};

export default UserJoined;
