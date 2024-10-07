// Auth Page
import PageLayout from "../../shared/ui/layouts/HeaderMainFooter/PageLayout";
import React from "react";
import Auth from "../../widgets/auth/auth";

const AuthPage: React.FC = () => {
  return (
    // Layout
    <PageLayout>
      <Auth />
    </PageLayout>
  );
};

export default AuthPage;
