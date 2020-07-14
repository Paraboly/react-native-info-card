import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles, {
  container,
  _shadowStyle,
  _footerContainer,
  _statusStyle,
} from './InfoCard.style';
import PropTypes from 'prop-types';
import Androw from 'react-native-androw';
const {width: ScreenWidth} = Dimensions.get('window');

const InfoCard = (props) => {
  const {
    width,
    title,
    height,
    source,
    onPress,
    iconName,
    iconType,
    iconColor,
    imageStyle,
    statusText,
    fontFamily,
    shadowStyle,
    borderColor,
    shadowColor,
    statusStyle,
    statusColor,
    description,
    borderRadius,
    descTextStyle,
    titleTextStyle,
    topButtonStyle,
    statusContainer,
    borderLeftWidth,
    backgroundColor,
    statusTextStyle,
    onPressTopButton,
    disableTopButton,
    topButtonComponent,
    descriptionDisable,
  } = props;
  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <View>
        <TouchableOpacity
          onPress={onPress}
          rippleColor="#f4a012"
          rippleDuration={1000}
          rippleContainerBorderRadius={16}
          style={container(
            height,
            width,
            borderRadius,
            backgroundColor,
            borderLeftWidth,
            borderColor,
          )}
          {...props}>
          <View style={styles.staticContainer}>
            <View style={styles.staticContainerGlue}>
              <View style={styles.headerContainer}>
                <Image
                  resizeMode="cover"
                  style={imageStyle || styles.imageStyle}
                  source={source}
                />
                <View style={styles.textContainer}>
                  <Text
                    numberOfLines={1}
                    style={[
                      titleTextStyle || styles.titleTextStyle,
                      {fontFamily},
                    ]}>
                    header
                  </Text>

                  {!descriptionDisable && (
                    <Text
                      style={[
                        descTextStyle || styles.descTextStyle,
                        {fontFamily},
                      ]}
                      numberOfLines={2}>
                      description
                    </Text>
                  )}
                </View>
              </View>
              <View style={_footerContainer(descriptionDisable)}>
                <View style={{flexDirection: 'row'}}>
                  <Text>footer</Text>
                </View>
                <View style={statusContainer || styles.statusContainer}>
                  <View style={statusStyle || _statusStyle(statusColor)}>
                    <Text
                      style={[
                        statusTextStyle || styles.statusTextStyle,
                        {fontFamily},
                      ]}>
                      Status
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Androw>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  dateText: PropTypes.string,
  iconColor: PropTypes.string,
  dateTitle: PropTypes.string,
  statusText: PropTypes.string,
  shadowColor: PropTypes.string,
  description: PropTypes.string,
  statusColor: PropTypes.string,
  borderRadius: PropTypes.number,
  disableTopButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderLeftWidth: PropTypes.number,
  descriptionDisable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InfoCard.defaultProps = {
  height: 115,
  borderRadius: 16,
  borderLeftWidth: 3,
  shadowColor: '#000',
  borderColor: '#4da6ea',
  statusColor: '#f4a012',
  backgroundColor: '#fff',
  width: ScreenWidth * 0.9,
  statusText: 'In Progress',
  descriptionDisable: false,
  title: 'Title Lorem Ipsum',
  source: {uri: 'https://image.flaticon.com/icons/png/256/2240/2240692.png'},
  description:
    'Morbi fringilla nisl vel lacus varius maximus. Etiam et mauris tortor. Sed et mauris non neque luctus tempus.',
  iconName: 'navigation',
  iconColor: '#fdfdfd',
  iconType: 'Feather',
};
export default InfoCard;
