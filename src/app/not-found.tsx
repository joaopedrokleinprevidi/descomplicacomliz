import { Card, CardContent } from "@/ui/card";
import { Button } from "@/ui/button";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";


export default function NotFound() {

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0D1117] p-4">
      <Card className="w-full max-w-md mx-auto bg-[#161B22] border-white/10 shadow-xl">
        <CardContent className="pt-8 pb-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Página não encontrada
            </h1>
            <p className="text-gray-400">
              Desculpe, a página que você está procurando não existe ou foi movida. 
            </p>
          </div>

          <Link href={`/`}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all hover:-translate-y-1">
              <Home className="mr-2 h-5 w-5" />
              Voltar para o início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
