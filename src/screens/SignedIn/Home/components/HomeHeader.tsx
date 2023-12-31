import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Colors from '@common/colors';

const HomeHeader = () => {
  const {t} = useTranslation();
  return (
    <View>
      {/*Navbar*/}
      <View className="flex-row">
        <Image
          className="w-12 h-12 rounded-full"
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI0AjgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUCAwj/xABGEAABAwMBBAcFBAUJCQAAAAABAAIDBAURBhIhMUEHEyJRcYGRFDJhobEVQ3LBI0KSovBTYpOywtHS4vEWFyUzNFJVY4L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAIBEBAQEBAAICAgMAAAAAAAAAAAERAhIxQVEhMgMTIv/aAAwDAQACEQMRAD8AsPCYWUQYwmFlEGMJhZRBjCYWV5c9rBmRwaO9xwgzhMLQqL5aac7M9zo4z3GdufqtV+rdPx+9d6Xyfn6IuV2cJhcH/bTTv/lYfR39y+jNXafecC70vm7H1TTxrtYTC0qS82yseGUtxpJnng1kzST5LeRMxjCYWUQYwmFlEBERAREPBAUe1Hq+1af2mVMplqQP+ni97zPBvmuV0i6v+w6f2Chf/wAQmbvcPuWnn+I8vM9ypeR7pXl8ji5xySScqa3OftNbz0l3mt2mURZRRHcOrGX+bj+WFEqu511cSaurnnzx62Qu+q1URrWcn/uPqseJKIhtPMp5n1RETXpjnhzS1zuPI8Cv0dp6aaexW+WpJMz6djnk8SSOK/OUEnVSAloc3m08Cv0bYLnT3e0U1bTANZIzBYP1HDcW+RCHX6ugiIq5iIiAiIgLTvNxitNsqK+f3IWF2zn3jyHmVuKsumS7FsdJaYye1+mk3+IaPqfRSrzNqt7rXz3OvnrKp+1LK8ucf49FqJwCyGl5w0En4BG/bCJgt3EEIgIiICIiAVZnQ5dy2eqtMr8h7euiB5EbneoI/ZVZrs6OrjbtTW+oDsN65rX/AIScH5EqLPp+hwiBFpyEREBERAX5+11cPtHVNfOCSxspjZ4N7P5ZV83GpFHQVNURnqYnP9Blfnqw0kdde6OKre4xS1DI3nO9wJGSs9XHTia7mitCVupXCokcaagacOmI3u7w0cz8eA+SuOwabsFhc2Ojo6frwB+mlAdIfM8PLC+FdXut+m5X2qlNO2GnPUNcMkADduVEXWeGapFQz2j20EvlqXzEuc7jkdw/jcuXlrpf8xfmpdD6dv1O+SWmbT1J+/pQGuz8RjB8wqg1T0e3exRuqY2isod56+L9Ufzm8R8x8Vd2jpJ63S9DNW5NQYtmTPNwOF4v0MskIgZnYz2sdybYZH5kIIOCMH4rC37rVRyV9d1sWHe0v2dgY2WAnktJ8ZYAd5a7eDjiF1lYs+nlFlYVQXuF5imY9pwWnIK8LLffHiEqx+mqSTrqWKX+UY13qMr6rUtGRaaEO972aPPjshbarnfYiIiCIiDga+mMGkLk4HBdGGZ/E4D6Eql9JUktx1DQU0W93Wg+QOT8gVeWqba676fraCMZklj7H4gQR8wqf6NqyG1a2oX136OMyGJxfu2S4Foz5kLHfp149Lvltk8zWNZNsjllq16Po708yobVS0THTA52Q52wPLOFIj2HEh2c8l9+tDI8g/JcZG7WpVVVDYqMNDTHCD2QAeJ+PxKj7NT0lzuLKOlcTJxe3GSPHHBdK93anpqaQ1D2hgG/aK5Olrnb3W8NpGsY/JMgAw7PIlLuuk8PD1+WnUdHGm6jamkoNucuLj+lc3OTnkVHdUadi+zxRst8MMLc7ErQS7OO/uxyVgS1rASNv05KKXKaWWSRrZncTvz/AKqfliKYuVvnt05jmbu4tPeFpqzLtafbaKZkzXPkaCWSF2VWjhsuIzwOF35usdRhbdppH19zpqSNpLpZGsGPiQPzWq1rnnDWkqXaHjktNw+0ZbdLPMxpEIc4Ma1x3bRJ+GeA5q2w55tXfGxsUbY2+6wBo8BwWScHj4Ku67UN7qGl01bT26HPCnZ2h/8AbvyAUdrJIqiIvpp6uoqiQ2Krkke4RvJwDtncAD3Kef0v9F92rnCLEYcGNDztOA7R7zzWVtwEREA71CNZ6Bgvcj623PZT1x3va73JD37huPx5qbocDemNc9WVXNv1XqrS0TaPUFrkraWPstnydoN/GMg+e9d2m6UdP1kWxUR19E7H3sQcPVpP0Cg+v9c1FfUTW21SmOhaS172nfN/l+HPmoM98g2GsLs4ycLnjtLq56q9aauE7Zp7tTygHstkJYB64XylutjD2Ppq+jjc3g9kzR5KpKW111W7MUMhzvzjd6rsU2lpQA+tqGxNHEbSzZG+Zb8LBOobaM7dzpjnm14O9aztS2ku2GTSVDu6KJznH5KIxQWKkkawONRMdwGcgny3LRdqWWGcspYI2wg4w0Yz8knOl8efaWV9dW10D4aGndTMk7LpKggOx8A3OFH22S00XaraoPfzYDjPlvK5NzvFXM5uxVl0TxkAYBb8CAuU5znZ2nEq+NPPj4iy7VaKyqja+z2UiJzQWVE5EbHA8Dne4jyXVrNJ3cWypnluDBURxOeynpWbnkDOztu37/Ab1v8ARdcfb9LRROOX0jzD5e8PrjyUvwOe8LU4jn1/N1uOLDpDTtRpenvFro+slkhbUNlqHmR5aRkjf48scFxaymZV0U1K8Dq5YyzA3YyFMOjd2LNX2uTtCgr54Gj/ANZO20fsvA8lGZ4jBPJCfu3lvocLUjnbddTStc64aeoqiU5l6vq5PxsJY75tK6yjmhRiyzNHAVtRj+kJ/NSNWM9exEREfOpmjpqeSed4ZFG0ue48gBkqE6h1m2e01kdroqsiSBzfapAIwwEYyAe0ePcFNK6ljraOekmz1c8bo3444IwVF6XQlOAG3C41lVG0YEY2YmuH87Z3n1Cz1vw6ceHvpR4BfJjm471JIbnaqGBmzTieo2Rtkjn5qaar0ZY7JZK+500cwlaB1YdJlrXOcBwxnnzKqXid6lm+3SdyTY71Vqmsk7MDWwjlsjeuTUVtTUO2ppnvPeXFa+EV8ZEvfVeo3ujkbI09ppyCVtT05qS6oo27TXHLox7zDzHgtNZa4tdtNJae8HCrD7RUVRIclhjYOL3jAHqvEzY2yFsTi5g/WIxlYklkl/5kj3/icSvCCyehitxV3CiLvfjErR37JAP9YK11SPRPP1WrYmcpYns+Wf7IV3ckidx8dE9jUepYhuBkp5cd+Y8Z/d+S4l+2YbvXZwGtlc4/VdrRna1TqSTkBSsx4McfzUX1ftXC+T2mlJ66umcxxH3cQOHv9N3iQhZtdDQ0Do9M0z5PeqHy1B8Hvc4fIhd9eII2QwxxRt2WRtDWjuAGAvarNu0RERBERBEelU40dOMHtTRg48c/kqNX6cqIIqmF8NRGyWJ4w5jxkEeChtz6NLHVl76XrqR5zgMdtNHkd+PNRvmzMUqisi1aI0vUUJdddS/ZtfCSyqpJQ3Mbxxxk9odxC+Vr0HarnBNUsuk0VOZSKVz4cukjG7bc3O7Jzgd2FNaxXmUU/qejUtz7NeKeT8cTmf4ly6vQd0paeWfrqWQRNLi2N5LnAdwIG9XTEURT6g6KL7XUUVbFVW32SVgkbL7QcbPf7u5e9N9G4utN7ZPcQymL3NZ1ce0ZWg4DwcjAPEbuCaY4vRs/Z1lbvi5w/ccr55Lh2DSlpsA2qGnzMRgzynafj4d3ku5ySMdVGrHqaC21moBSQvr7rU3Axw0kR4NYxrdp7uDGZDt57ty3rDZ3UDp62ukbPc6s7VRM0YaN+Qxvc0ZXQpqOmpOs9lp4outeXyFjQNtxOST3lfdML19CIirIiIgIiIC16ynfOwBkhYQcn4rYRBBP93dEyYyOE82/OHTbvoD812YrZLTRMihpgyNg2WtZjACkSJi3q32j/sdT/IvXmShrHRuETCx5BDXEA4PIqRLOMIis6To/uxa+CpusjaV5JfDE4hriePZzjf4Kb2y1uomwtbJssjaGtY08QBjeuoikka66t9iIirIiIgIiFB//2Q==',
          }}
        />
        <View className="ml-2">
          <Text className="text-xs text-gray-500">{t('DELIVERY_NOW')}</Text>
          <View className="flex-row">
            <Text className="text-lg font-bold">Vị trí hiện tại</Text>
            <EntypoIcon
              name="chevron-down"
              color={Colors.cyan500}
              size={20}
              style={styles.centerIcon}
            />
          </View>
        </View>
        <View className="flex-1 items-end justify-centerS">
          <FontAwesomeIcon name="user" color={Colors.cyan500} size={45} />
        </View>
      </View>
      {/*Search field*/}
      <View className="flex-row mt-2">
        <View className="flex-1 bg-gray-200 flex-row p-2">
          <AntDesignIcon name="search1" size={20} style={styles.centerIcon} />
          <TextInput
            placeholder={t('RESTAURANT_AND_CUSTOMER')}
            className="ml-2"
          />
        </View>
        <TouchableOpacity className="pl-2 justify-center">
          <AntDesignIcon name="filter" size={25} style={styles.centerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerIcon: {
    alignSelf: 'center',
  },
});

export default HomeHeader;
