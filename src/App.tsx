import { useQuery } from "@tanstack/react-query"

//ENTRY POINT OF APP. CLEAR THIS FUNCTION TO START.
function App() {

  const randomPeople = useQuery({
    queryKey: ["user"], queryFn: () => {
      return fetch("https://fakerapi.it/api/v1/persons").then(response => response.json())
    }
  })

  return (
    <div className="flex h-screen w-full justify-center items-center">
      {randomPeople.isLoading &&
        <span className="text-3xl">Loading...</span>
      }
      {randomPeople.isSuccess &&
        <div className="flex flex-col">
          {randomPeople.data.data.map((person: any) => (
            <div>
              {person.firstname} {person.lastname}
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default App
