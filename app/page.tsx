import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
 <main className="flex min-h-screen flex-col items-center p-24 text-white gap-10 bg-gradient-to-tl from-teal-400 via-blue-500 to-indigo-600">
      <h1 className = "text-6xl font-semibold drop-shadow-md">Auth</h1>
      <p className="text-lg">Simple Authentication Service</p>
      <LoginButton >
<Button variant={'secondary'} >Click me</Button>
</LoginButton>

      
    </main>
  );
}
