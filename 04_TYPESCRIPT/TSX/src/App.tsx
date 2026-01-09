/* 

  App.tsx             (Se utiliza todo lo necesario para poder soportar tsx adaptando todos los componentes para TypeScript).

*/


import { useState } from "react"

/* =========================
   TIPOS Y MODELOS
========================= */

// union type
type Status = "idle" | "loading" | "success" | "error"

// objeto base
type User = {
  readonly id: number
  name: string
  age?: number
}

// props del componente
type CardProps = {
  title: string
  initialCount?: number
  user: User | null
  status: Status
  onSelectUser: (id: number) => void
  children: React.ReactNode
}

/* =========================
  COMPONENTE
========================= */

function Card({ title, initialCount = 0, user, status, onSelectUser, children }: CardProps) {
  /* useState tipado */
  const [count, setCount] = useState<number>(initialCount)
  const [input, setInput] = useState<string>("")

  /* eventos */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  /* funciones tipadas */
  const handleSelect = () => {
    if (user) {
      onSelectUser(user.id)
    }
  }

  /* render condicional con union */
  if (status === "loading") {
    return <p>Cargando...</p>
  }

  if (status === "error") {
    return <p>Error</p>
  }

  return (
    <div>
      <h2>{title}</h2>

      <p>Contador: {count}</p>
      <button onClick={handleClick}>Sumar</button>

      <input
        type="text"
        value={input}
        onChange={handleChange}
      />

      {user && (
        <div>
          <p>{user.name}</p>
          <button onClick={handleSelect}>
            Seleccionar usuario
          </button>
        </div>
      )}

      {/* children */}
      <div>{children}</div>
    </div>
  )
}

/* =========================
   USO DEL COMPONENTE
========================= */

export default function App() {

  const user: User = {
    id: 1,
    name: "Diego"
  }

  const handleSelectUser = (id: number): void => {
    console.log("Usuario seleccionado:", id)
  }

  return (
    <Card
      title="Tarjeta principal"
      user={user}
      status="success"
      onSelectUser={handleSelectUser}
    >
      <p>Contenido interno</p>
    </Card>
  )
}
