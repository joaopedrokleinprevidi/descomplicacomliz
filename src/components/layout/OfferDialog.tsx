"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type OfferDecision = "accepted" | "declined" | "dismissed";

interface OfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  leadName?: string;
  onAccept: () => Promise<void>;
  onDecline: () => Promise<void>;
}

function buildWhatsAppLink(params: { phoneE164: string; message: string }) {
  const base = `https://wa.me/${params.phoneE164}`;
  const text = encodeURIComponent(params.message);
  return `${base}?text=${text}`;
}

export function OfferDialog({ open, onOpenChange, leadName, onAccept, onDecline }: OfferDialogProps) {
  const waLink = useMemo(() => {
    return buildWhatsAppLink({
      phoneE164: "554796858847",
      message:
        'Ole1, vim pelo seu website. Me cadastrei e recebi a oferta promocional com 10% de desconto, pode me dar mais detalhes, por favor!?',
    });
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl" data-testid="modal-offer">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl" data-testid="text-modal-title">
            Voce3o ganhou 10% de desconto
          </DialogTitle>
          <DialogDescription className="text-foreground/70" data-testid="text-modal-desc">
            Quer receber agora no WhatsApp e entender como aplicar na sua compra?
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 rounded-2xl border border-border/60 bg-white/40 p-4" data-testid="box-modal-info">
          <div className="text-sm font-semibold" data-testid="text-modal-name">
            {leadName ? `Perfeito, ${leadName}!` : "Perfeito!"}
          </div>
          <div className="mt-1 text-xs text-foreground/60" data-testid="text-modal-note">
            Se voce3o clicar em "Sim, eu quero!", a conversa abre com uma mensagem pronta.
          </div>
        </div>

        <DialogFooter className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            className="cta-glow h-11 rounded-full"
            onClick={async () => {
              await onDecline();
              onOpenChange(false);
            }}
            data-testid="button-cancel-offer"
          >
            Cancelar
          </Button>

          <Button
            className="cta-glow h-11 rounded-full bg-foreground text-background hover:bg-[hsl(var(--accent))]"
            asChild
            onClick={async () => {
              await onAccept();
            }}
            data-testid="button-accept-offer"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              Sim, eu quero!
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
