import { ButtonAddTask } from "@/components/buttonAddTask";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-[450px] h-[446px] border p-8 my-10 rounded-2xl items-center">
        <p>Suas tarefas de hoje</p>
        <p>Lavar as mãos</p>
        <p>Fazer um bolo</p>
        <p>Lavar a louça</p>
      </div>
      <ButtonAddTask />
    </div>
  );
}
