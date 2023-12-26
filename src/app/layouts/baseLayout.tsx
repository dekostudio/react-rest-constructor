import { Layout } from "@/shared/ui/Layout/Layout";
import { LayoutFooter } from "@/widgets/LayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";

export const baseLayout = (
  <Layout 
    headerSlot={
      <LayoutHeader/>
    }
    footerSlot={
      <LayoutFooter />
    }
  />
)