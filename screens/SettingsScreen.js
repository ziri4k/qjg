/**
 * @file User Screen.
 * @author Vadim Savin
 */

 import React, { useState, useEffect } from 'react';
 import { View, Text,Pressable } from 'react-native';
 import Purchases from 'react-native-purchases';
 import { ENTITLEMENT_ID } from './constants';
 import { LoginForm, LogoutButton, RestorePurchasesButton } from './components';
 import styles from './screens/UserScreen/styles';
 import {AuthContext} from '../components/context';
 
 
 /*
  The app's user tab to display user's details like subscription status and ID's.
  */
 const UserScreen = () => {

  const {signOut, toggleTheme} = React.useContext(AuthContext);
   const [isAnonymous, setIsAnonymous] = useState(true);
   const [userId, setUserId] = useState(null);
   const [subscriptionActive, setSubscriptionActive] = useState(false);
 
   // get the latest details about the user (is anonymous, user id, has active subscription)
  //  const getUserDetails = async () => {
  //    setIsAnonymous(await Purchases.isAnonymous());
  //    setUserId(await Purchases.getAppUserID());
 
  //    const purchaserInfo = await Purchases.getPurchaserInfo();
  //    setSubscriptionActive(typeof purchaserInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined');
  //  };
 
  //  useEffect(() => {
  //    // Get user details when component first mounts
  //    getUserDetails();
  //  }, []);
 
  //  useEffect(() => {
  //    // Subscribe to purchaser updates
  //    Purchases.addPurchaserInfoUpdateListener(getUserDetails);
  //    return () => {
  //      Purchases.removePurchaserInfoUpdateListener(getUserDetails);
  //    };
  //  });
 
   return (
     <View style={styles.page}>
       {/* The user's current app user ID and subscription status */}
       {/* <Text style={styles.headline}>Current User Identifier</Text> */}
       {/* <Text style={styles.userIdentifier}>{userId}</Text> */}
 
       {/* <Text style={styles.headline}>Subscription Status</Text>
       <Text style={{ color: subscriptionActive ? 'green' : 'red' }}>
         {subscriptionActive ? 'Active' : 'Not Active'}
       </Text> */}
 
       {/* Authentication UI */}
       {/* {isAnonymous ? <LoginForm onLogin={getUserDetails} /> : <LogoutButton onLogout={getUserDetails} />} */}
 
       {/* You should always give users the option to restore purchases to connect their purchase to their current app user ID */}
       {/* <RestorePurchasesButton /> */}

       <Pressable  onPress={() => {
            signOut();
          }}>
         <Text style={{color:'#ffffff'}}>✨ Logout</Text>
       </Pressable>
     </View>
   );
 };
 
 export default UserScreen;
 