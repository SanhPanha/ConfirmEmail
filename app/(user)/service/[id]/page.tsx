import CardComponent from "@/components/card/CardComponent";

type PropsParams = {
  params: {
    id: number;
  };
  searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`); // {next: {revalidate: 10}} This is for caching
  const data = await res.json();
  console.log(data);
  return data;
};

export default async function Detail(props: PropsParams) {
  let data = await getData(props.params.id);
  return (
    <div className="h-screen grid place-content-center">
      <CardComponent
        title={data?.title || "No Title"}
        description={data?.description || "No Description"}
        image={
          data?.image ||
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fendlessicons.com%2Ffree-icons%2Fimage-folder-icon%2F&psig=AOvVaw3GnH-6ptLqYYj7Rok8s26w&ust=1711074639444000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPi6x_OnhIUDFQAAAAAdAAAAABAD"
        }
      />
    </div>
  );
}
