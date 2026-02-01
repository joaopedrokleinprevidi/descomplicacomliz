import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="sobre">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative" data-testid="img-about">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl" data-testid="box-about-photo">
            <Image 
              src="/liz-foto.jpeg" 
              alt="Lizandra Bortoluzzi - Especialista em Finanças Comportamentais"
              width={600}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-3 md:-right-6 grid h-32 w-32 place-items-center rounded-full bg-[hsl(var(--accent))] text-background shadow-lg" data-testid="badge-experience">
            <div className="text-center">
              <div className="font-serif text-4xl font-semibold" data-testid="text-experience-amount">24+</div>
              <div className="text-xs font-semibold" data-testid="text-experience-label">anos de experiência</div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80" data-testid="text-about-badge">
            Quem sou
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-about-title">
            Lizandra Bortoluzzi
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/70 md:text-base">
            <p data-testid="text-about-p1">
              Especialista em Finanças Comportamentais com mais de 24 anos de atuação em bancos e cooperativas de crédito. Natural do Rio Grande do Sul, sempre fui movida por sonhos grandes, disciplina e desejo de independência.
            </p>
            <p data-testid="text-about-p2">
              Aos 30 anos, mudei-me para Itajaí (SC), iniciando um novo ciclo. Mesmo alcançando estabilidade financeira, bons salários e reconhecimento profissional, passei a sentir exaustão emocional e um profundo desalinhamento interno.
            </p>
            <p data-testid="text-about-p3">
              Foi quando encontrei a Programação Neurolinguística (PNL) e uni finanças com desenvolvimento humano. Compreendi que decisões financeiras são emocionais, ligadas a crenças, padrões e identidade.
            </p>
            <div className="mt-6 border-l-4 border-[hsl(var(--accent))] pl-4 font-serif text-xl italic text-[hsl(var(--accent))]" data-testid="text-about-quote">
              "Dinheiro não muda quem você é — ele amplifica. E quando há clareza, ele amplia liberdade."
            </div>
            <p data-testid="text-about-p4">
              Ao reorganizar minha própria vida, encontrei paz, liberdade e propósito — algo que nenhum "alto salário" havia proporcionado. Dessa transformação nasceu meu trabalho: ajudar mulheres a organizarem sua vida financeira com consciência, leveza e humanidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
