import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>HM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Habiba Mahmoud</p>
          <p className="text-sm text-muted-foreground">
            habiba.mahmoud@email.com
          </p>
        </div>
        <div className="ml-6 text-[12px] sm:text-[16px] sm:ml-auto font-medium ">
          LE 1999
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Omar Mohammed</p>
          <p className="text-sm text-muted-foreground">
            omar.Mohammed@email.com
          </p>
        </div>
        <div className="ml-6 text-[12px] sm:text-[16px] sm:ml-auto font-medium ">
          LE 39
        </div>
      </div>
      <div className="flex items-center ">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Khaled</p>
          <p className="text-sm text-muted-foreground">
            sarah.khaled@email.com
          </p>
        </div>
        <div className="ml-6 text-[12px] sm:text-[16px] sm:ml-auto font-medium ">
          LE 299
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>YA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Youssef Ahmed</p>
          <p className="text-sm text-muted-foreground">
            youssefahmed@email.com
          </p>
        </div>
        <div className="ml-6 text-[12px] sm:text-[16px] sm:ml-auto font-medium ">
          LE 99.00
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          {/* <AvatarImage src="/avatars/05.png" alt="Avatar" /> */}
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Salma Amir</p>
          <p className="text-sm text-muted-foreground">salma.amir@email.com</p>
        </div>
        <div className="ml-6 text-[12px] sm:text-[16px] sm:ml-auto font-medium ">
          LE 39.00
        </div>
      </div>
    </div>
  );
}
