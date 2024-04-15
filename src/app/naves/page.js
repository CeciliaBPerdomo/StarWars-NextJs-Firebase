import ListaNaves from "@/components/naves/ListaNaves";

export default function Naves() {
    return (
      <div className="bg-black">
        <h1 className="text-blue-800 ml-8 pt-8 text-3xl text-center mb-8">
          Naves 
        </h1>

        <ListaNaves />
      </div>
    );
  }
  