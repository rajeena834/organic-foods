// import { cancelOrder, markOrderAsDelivered, returnOrder } from "@/actions/orders";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import usersGlobalStore, {
//   IUsersGlobalStore,
// } from "@/globals-store/users-store";
// import { IOrderItem } from "@/interfaces";
// import React from "react";
// import toast from "react-hot-toast";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// interface IOrderDetailsProps {
//   openOrderDetails: boolean;
//   setOpenOrderDetails: (value: boolean) => void;
//   selectedOrder: IOrderItem;
//   reloadData: () => void;
// }

// function OrderDetails({
//   openOrderDetails,
//   setOpenOrderDetails,
//   selectedOrder,
//   reloadData,
// }: IOrderDetailsProps) {
//   const [loading, setLoading] = React.useState(false);
//   const { user } = usersGlobalStore() as IUsersGlobalStore;
//   const renderOrderProperty = (key: string, value: any) => {
//     return (
//       <div className="flex flex-col">
//         <span className="text-xs text-gray-500 font-semibold">{key}</span>
//         <span className="text-sm font-semibold capitalize">{value}</span>
//       </div>
//     );
//   };

//   const cancelOrderHandler = async () => {
//     try {
//       setLoading(true);
//       const response = await cancelOrder(
//         selectedOrder?.id,
//         selectedOrder.payment_id
//       );
//       if (response.success) {
//         toast.success(response.message);
//         reloadData();
//         setOpenOrderDetails(false);
//       } else {
//         toast.error(response.message);
//       }
//     } catch (error: any) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsDeliveredHandler = async () => {
//     try {
//       setLoading(true);
//       const response = await markOrderAsDelivered(selectedOrder?.id);
//       if (response.success) {
//         toast.success(response.message);
//         reloadData();
//         setOpenOrderDetails(false);
//       } else {
//         toast.error(response.message);
//       }
//     } catch (error: any) {
//       toast.error(error.message);
       
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReturnOrder = async () => {
//   try {
//     if (!selectedOrder?.id) {
//       toast.error("Invalid order");
//       return;
//     }
//     setLoading(true);

//     const response = await returnOrder(String(selectedOrder.id));

//     if (response.success) {
//       toast.success(response.message);
//       reloadData();
//       setOpenOrderDetails(false);
//     } else {
//       toast.error(response.message);
//     }
//   } catch (error: any) {
//     toast.error(error.message);
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <Dialog open={openOrderDetails} onOpenChange={setOpenOrderDetails}>
//       <DialogContent className="lg:max-w-[1000px]">
//         <DialogHeader>
//           <DialogTitle>Order Details</DialogTitle>
//         </DialogHeader>

//         <hr className="my-3 border border-gray-200" />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {renderOrderProperty("Order ID", selectedOrder.id)}
//           {renderOrderProperty("Customer Name", selectedOrder.addresses.name)}
//           {renderOrderProperty("Customer Email", selectedOrder.addresses.email)}
//           {renderOrderProperty(
//             "Customer Phone",
//             selectedOrder.addresses.phone_number
//           )}
//           {renderOrderProperty("City", selectedOrder.addresses.city)}
//           {renderOrderProperty("State", selectedOrder.addresses.state)}
//           {renderOrderProperty(
//             "Postal Code",
//             selectedOrder.addresses.postal_code
//           )}

//           <div className="col-span-3">
//             {renderOrderProperty("Address", selectedOrder.addresses.address)}
//           </div>
//         </div>

//         <hr className="my-3 border border-gray-200" />

//         <div className="flex justify-end gap-5">
//           {selectedOrder.order_status === "order_placed" && (
//             <div className="flex gap-5">
//               {/* <Button
//                 variant={"outline"}
//                 onClick={cancelOrderHandler}
//                 disabled={loading}
//               >
//                 Cancel Order
//               </Button> */}
              
//               <AlertDialog>
//   <AlertDialogTrigger asChild>
//     <Button variant="outline" disabled={loading}>
//       Cancel Order
//     </Button>
//   </AlertDialogTrigger>

//   <AlertDialogContent>
//     <AlertDialogHeader>
//       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//       <AlertDialogDescription>
//         This action will cancel the order permanently.
//       </AlertDialogDescription>
//     </AlertDialogHeader>

//     <AlertDialogFooter>
//       <AlertDialogCancel>No, Keep Order</AlertDialogCancel>
//       <AlertDialogAction
//         onClick={cancelOrderHandler}
//         className="bg-red-600 hover:bg-red-700"
//       >
//         Yes, Cancel Order
//       </AlertDialogAction>
//     </AlertDialogFooter>
//   </AlertDialogContent>
// </AlertDialog>

//               {user.is_admin && (
//                 <Button
//                   variant={"outline"}
//                   onClick={markAsDeliveredHandler}
//                   disabled={loading}
//                 >
//                   Mark as Delivered
//                 </Button>
//               )}
//             </div>
//           )}
          
// {selectedOrder.order_status === "delivered" && ( <AlertDialog> <AlertDialogTrigger asChild> <Button variant="outline" disabled={loading}> Return Order </Button> </AlertDialogTrigger> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Return this order?</AlertDialogTitle> <AlertDialogDescription> This will initiate a return request. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>No</AlertDialogCancel> <AlertDialogAction onClick={handleReturnOrder} className="bg-yellow-600 hover:bg-yellow-700" > Yes, Return </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> )}

//           <Button disabled={loading} onClick={() => setOpenOrderDetails(false)}>
//             Close
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default OrderDetails;


"use client";

import { cancelOrder, markOrderAsDelivered, returnOrder } from "@/actions/orders";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usersGlobalStore, {
  IUsersGlobalStore,
} from "@/globals-store/users-store";
import { IOrderItem } from "@/interfaces";
import React from "react";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface IOrderDetailsProps {
  openOrderDetails: boolean;
  setOpenOrderDetails: (value: boolean) => void;
  selectedOrder: IOrderItem;
  reloadData: () => void;
}

function OrderDetails({
  openOrderDetails,
  setOpenOrderDetails,
  selectedOrder,
  reloadData,
}: IOrderDetailsProps) {
  const [loading, setLoading] = React.useState(false);
  const { user } = usersGlobalStore() as IUsersGlobalStore;

  // ✅ SAFETY CHECK (prevents runtime crash)
  if (!selectedOrder || !selectedOrder.addresses) return null;

  const renderOrderProperty = (key: string, value: any) => {
    return (
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-semibold">{key}</span>
        <span className="text-sm font-semibold capitalize">{value}</span>
      </div>
    );
  };

  const cancelOrderHandler = async () => {
    try {
      setLoading(true);
      const response = await cancelOrder(
        selectedOrder?.id,
        selectedOrder?.payment_id
      );
      if (response.success) {
        toast.success(response.message);
        reloadData();
        setOpenOrderDetails(false);
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const markAsDeliveredHandler = async () => {
    try {
      setLoading(true);
      const response = await markOrderAsDelivered(selectedOrder?.id);
      if (response.success) {
        toast.success(response.message);
        reloadData();
        setOpenOrderDetails(false);
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReturnOrder = async () => {
    try {
      if (!selectedOrder?.id) {
        toast.error("Invalid order");
        return;
      }

      setLoading(true);

      const response = await returnOrder(String(selectedOrder.id));

      if (response.success) {
        toast.success(response.message);
        reloadData();
        setOpenOrderDetails(false);
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openOrderDetails} onOpenChange={setOpenOrderDetails}>
      <DialogContent className="lg:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>

        <hr className="my-3 border border-gray-200" />

        {/* ORDER DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {renderOrderProperty("Order ID", selectedOrder?.id)}
          {renderOrderProperty("Customer Name", selectedOrder.addresses?.name)}
          {renderOrderProperty("Customer Email", selectedOrder.addresses?.email)}
          {renderOrderProperty(
            "Customer Phone",
            selectedOrder.addresses?.phone_number
          )}
          {renderOrderProperty("City", selectedOrder.addresses?.city)}
          {renderOrderProperty("State", selectedOrder.addresses?.state)}
          {renderOrderProperty(
            "Postal Code",
            selectedOrder.addresses?.postal_code
          )}

          <div className="col-span-3">
            {renderOrderProperty("Address", selectedOrder.addresses?.address)}
          </div>
        </div>

        <hr className="my-3 border border-gray-200" />

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-5">

          {/* ORDER PLACED */}
          {selectedOrder?.order_status === "order_placed" && (
            <div className="flex gap-5">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" disabled={loading}>
                    Cancel Order
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will cancel the order permanently.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>No, Keep Order</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={cancelOrderHandler}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Yes, Cancel Order
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {user?.is_admin && (
                <Button
                  variant="outline"
                  onClick={markAsDeliveredHandler}
                  disabled={loading}
                >
                  Mark as Delivered
                </Button>
              )}
            </div>
          )}

          {/* DELIVERED → RETURN */}
          {selectedOrder?.order_status === "delivered" && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" disabled={loading}>
                  Return Order
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Return this order?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will initiate a return request.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleReturnOrder}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Yes, Return
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          {/* CLOSE */}
          <Button
            disabled={loading}
            onClick={() => setOpenOrderDetails(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default OrderDetails;

