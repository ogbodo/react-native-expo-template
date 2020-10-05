import React from 'react';
import Modal from 'react-native-modal';

interface CustomModalProps {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
  children?: React.ReactNode;
}

export default function CustomModal(props: CustomModalProps) {
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackButtonPress={props.onBackdropPress}
      onBackdropPress={props.onBackdropPress}
      onSwipeComplete={props.onBackdropPress}
      swipeDirection={['down']}
      useNativeDriver={true}
      style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}
    >
      {props.children}
    </Modal>
  );
}
