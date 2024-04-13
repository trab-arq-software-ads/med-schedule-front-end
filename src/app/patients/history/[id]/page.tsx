import ListAppointments from "./components/history"



export default function History({params}:{params: {id: number}}) {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <div className="flex justify-center items-center w-full max-w-screen-lg">
        <ListAppointments id={params.id} />
      </div>
    </div>
  )
}
