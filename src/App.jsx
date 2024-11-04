import { QueryClient, QueryClientProvider } from "react-query"
import { TypeProvider } from "./contexts/types-context"
import { AppRoutes } from "./pages/routes"

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TypeProvider>
          <AppRoutes />
        </TypeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App