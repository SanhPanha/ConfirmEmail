import CardComponent from "@/components/card/CardComponent";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`); // {next: {revalidate: 10}} This is for caching
  const data = await res.json();
  console.log(data);
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  }
}

export default async function Detail(props: Props) {
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
