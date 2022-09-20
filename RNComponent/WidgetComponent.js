/* eslint-disable react-native/no-inline-styles */
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Dimensions, View, Text, Image, Modal, Pressable} from 'react-native';

export const WidgetComponent = ({truecostValue, onOptInChange}) => {
  const [toggleCheckbox, setToggleCheckbox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {width, height} = Dimensions.get('window');

  const WorkFlowStep = ({step}) => {
    const steps = [
      {
        title: 'Choose',
        description:
          'Choose a project you love from our portfolio of avoided emissions and removed emission projects.',
        img: 'choose.png',
      },
      {
        title: 'Allocate',
        description:
          'Your Climes will be added to your wallet - and you can allocate them to a project via the Climes platform.',
        img: 'allocate.png',
      },
      {
        title: 'Get Rewarded',
        description:
          'Get access to exclusive vouchers and rewards for being Climate concious.',
        img: 'reward.png',
      },
    ];
    return (
      <View style={{flexDirection: 'row', marginBottom: 12}}>
        <View style={{maxWidth: '75%'}}>
          <Text style={{color: 'black'}}>
            {step + 1}. {steps[step].title}
          </Text>
          <Text
            style={{
              color: '#878990',
              marginTop: 2,
              lineHeight: 18,
            }}>
            {steps[step].description}
          </Text>
        </View>
        <Image
          style={{
            width: 68,
            flexShrink: 0,
            height: 68,

            marginLeft: 'auto',
          }}
          source={{
            uri: `https://ik.imagekit.io/climesimages/shopify/${steps[step].img}`,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        maxWidth: 375,
        height: 108,
        alignSelf: 'stretch',
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        marginTop: 8,
        marginBottom: 12,
        borderRadius: 4,
        flexDirection: 'column',
      }}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <CheckBox
          disabled={false}
          value={toggleCheckbox}
          onValueChange={isChecked => {
            onOptInChange?.(isChecked);
            setToggleCheckbox(isChecked);
          }}
        />

        <Text> Make my order carbon neutral for ₹{truecostValue}</Text>
      </View>
      <View style={{width: '85.75%', marginLeft: 'auto', paddingRight: 12}}>
        <Text>
          Neutralise this product's carbon emissions with{' '}
          <Text
            style={{
              color: '#8940C9',
              fontWeight: '700',
              letterSpacing: 0.2,
            }}>
            CLIMES
          </Text>
        </Text>
        <Text
          onPress={() => setModalVisible(true)}
          style={{
            marginTop: 4,
            color: '#8940C9',
            textDecorationLine: 'underline',
          }}>
          Find out how it works.
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              margin: 12,
              height: height - 24,
              width: width - 20,
              backgroundColor: '#F5F5F5',
              borderRadius: 8,
              paddingHorizontal: 20,
              paddingVertical: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Pressable
              style={{position: 'absolute', top: 6, right: 12}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '500',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                }}>
                x
              </Text>
            </Pressable>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'left',
                color: 'black',
                fontStyle: 'italic',
              }}>
              You opted for a climate conscious purchase!
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}>
              <Image
                source={{
                  uri: 'https://ik.imagekit.io/climesimages/shopify/widget-co2.png',
                }}
                style={{width: 60, height: 60}}
              />
              <Text style={{color: '#878990', flexShrink: 1, marginLeft: 10}}>
                This small change can help neutralise {truecostValue / 2}-
                {truecostValue} kgs of carbon emissions in just one month.
              </Text>
            </View>
            <View
              style={{
                marginTop: 16,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}>
              <Image
                source={{
                  uri: 'https://ik.imagekit.io/climesimages/shopify/widget-trees.png',
                }}
                style={{width: 60, height: 60}}
              />
              <Text style={{color: '#878990', flexShrink: 1, marginLeft: 10}}>
                Which is equivalent to 10 seedlings grown for the next 10 years!
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: 'black', fontSize: 16}}>How it works?</Text>
              <Text style={{color: 'black', marginTop: 4}}>
                You will collect climes (credits) to transparently:
              </Text>
              <View style={{marginTop: 16}}>
                <WorkFlowStep step={0} />
                <WorkFlowStep step={1} />
                <WorkFlowStep step={2} />
              </View>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  marginTop: 20,
                  fontSize: 12,
                }}>
                {' '}
                *by opting-in you allow Climes to contact you with updates on
                your purchase.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#00AA44',
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
                paddingHorizontal: 28,
                paddingVertical: 12,
                position: 'absolute',
                bottom: 0,
                width: width - 20,
              }}>
              <Text style={{textAlign: 'center', fontSize: 16}}>
                Your contribution of ₹ {truecostValue} will neutralise your
                carbon emissions
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
