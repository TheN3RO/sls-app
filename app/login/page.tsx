// pages/auth/login.tsx
import { LoginForm } from '@/components/auth';
import styles from '../../styles/LoginPage.module.css';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className='h-screen flex justify-center items-center bg-neutral-950'>
      <div className={`container-md flex flex-row flex-wrap ${styles.loginFormShadow} bg-neutral-300`}>
        <div className='basis-1/2 max-h-[440px]'>
          <Image src="/images/login-image.png"
          width={500} height={500}
          alt='Login image' 
          className='w-full h-full object-cover'/>
        </div>
        <div className='basis-1/2 max-h-[440px]'>
          <div className='w-full my-3'>
            <div className='flex justify-center'>
              <div className='flex'>
                <Image src='/logo/sls-logo-reverted.svg' alt='logo' width={72} height={72} className='p-2' />
                <Image src='/logo/sls-text-logo-reverted.svg' alt='logo-text' width={80} height={80} />
              </div>
            </div>
            {/* <Image src="/logo/sls-logo-v2.svg" width={112} height={66} alt="sls-logo" className='mx-auto' /> */}
          </div>
          <div className='flex justify-center'>
            <LoginForm />
          </div>
          <div className='text-center'>
            Jeśli nie masz konta, <a href='/auth/register' className='text-violet-400'>zgłoś się do nas</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
