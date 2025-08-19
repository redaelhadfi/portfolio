"use client";

import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function FreelancerWidget() {
  return (
    <Card className="p-6 max-w-md bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="https://cdn5.f-cdn.com/ppic/279372228/logo/71005125/profile_logo_71005125.jpg"
            alt="Reda El Hadfi"
            width={80}
            height={80}
            className="rounded-full border-2 border-primary/30"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground">
              <a 
                href="https://www.freelancer.com/affiliates/email/71005125/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-primary/50"
              >
                REDA EL HADFI
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer | Build Modern Web Solutions
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-primary" />
              <span>684233470</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-primary" />
              <span>redaelhadfi1@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
              <span className="leading-tight">
                DOUAR LAMAGHA AIN KARMA OUED ROUMANE AIN JEMAA, MEKNES, 50000
              </span>
            </div>
          </div>

          <Button 
            size="sm" 
            variant="outline" 
            className="w-full text-xs border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a 
              href="https://www.freelancer.com/affiliates/email/71005125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              Hire me on Freelancer.com
            </a>
          </Button>
        </div>
      </div>

      {/* Tracking pixel (hidden) */}
      <img 
        src="//t.flnwdgt.com/1px.gif?username=elhadfi&en=externalHireme&method=img&label=hiremeEmailImpression&ip=105.74.4.220&type=emailSignature"
        alt=""
        className="hidden"
      />
    </Card>
  );
}
