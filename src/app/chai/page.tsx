import { Button } from "@/components/ui/button"

function Chaipage() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div>
        Chaipage
      </div>
      <button className="px-4 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">Test button</button>
      <Button variant="destructive" size="sm">ShadCn Button</Button>
    </div>
  )
}

export default Chaipage