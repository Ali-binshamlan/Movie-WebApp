type LoginFormData = {
  email: string;
  password: string;
};

// محاكاة تسجيل دخول وهمي
export async function loginUser(data: LoginFormData): Promise<{ token: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "mock-token-123" });
    }, 500);
  });
}

