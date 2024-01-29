
export function ListRender() {
    const users = [
      {
        id: 1,
        username: "user1",
        email: "user1@example.com",
        age: 25,
        isAdmin: false,
      },
      {
        id: 2,
        username: "user2",
        email: "user2@example.com",
        age: 30,
        isAdmin: true,
      },
      {
        id: 3,
        username: "user3",
        email: "user3@example.com",
        age: 28,
        isAdmin: false,
      },
      {
        id: 4,
        username: "user4",
        email: "user4@example.com",
        age: 22,
        isAdmin: false,
      },
      {
        id: 5,
        username: "user5",
        email: "user5@example.com",
        age: 35,
        isAdmin: true,
      },
    ];
    return <>{users.map((user, index)=>{
       return <li key={index}>{String(user.isAdmin)}</li>;
    })}</>;
}