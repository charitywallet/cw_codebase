import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {DrivesCard} from '../components/CharityTabComponents/DrivesCard';
import EStyleSheet from 'react-native-extended-stylesheet';

class Drives extends Component {

  render() {
    return(
      <View>
      <FlatList
            columnWrapperStyle={styles.row}
            data={[
              {driveImageURL: 'https://mldpyw8anemv.i.optimole.com/w:auto/h:auto/q:auto/https://mk0geekspinexfjuv770.kinstacdn.com/wp-content/uploads/2018/11/detective-pikachu.jpg'
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help Detective Pikachu'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.8},
            {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.3},
            {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.3},
            {driveImageURL: 'https://media.npr.org/assets/img/2016/10/15/gettyimages-543499144_wide-c7be8ee176c6dabe59ee7a2f2758c4633c6d1c7d-s800-c85.jpg'
            , driveLocation: 'Berkeley, CA', driveTitle: 'Help the Homeless on Telegraph'
            , driveAbout: 'There is this homeless guy sitting on Telegraph and Bancroft. We really think that we can help him out.'
            , currentMoney: '450'
            , targetMoney: '2000'
            , percentCompleted: 0.5}]}
            renderItem={({item}) => (
            <DrivesCard
              drive= {item} navigation={this.props.navigation}/>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
      />
      </View>
    );
  }
};


export default Drives;

const styles= EStyleSheet.create({
  row: {
  flex: 1,
  justifyContent: 'space-between'
  }
});
