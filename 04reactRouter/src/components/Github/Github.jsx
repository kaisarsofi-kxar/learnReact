import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kaisarsofi-kxar")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //     console.log(data);
  //   }, []);

  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-10 text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        Github Followers: {data.followers}
      </div>
    </>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kaisarsofi-kxar");
  return response.json();
};
