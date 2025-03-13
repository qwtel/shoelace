import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'ko',
  $name: '한국어',
  $dir: 'ltr',

  carousel: '캐러셀',
  clearEntry: '지우기',
  close: '닫기',
  copied: '복사됨',
  copy: '복사',
  currentValue: '현재 값',
  error: '오류',
  goToSlide: (slide, count) => `${count}개 중 ${slide}번 슬라이드로 이동`,
  hidePassword: '비밀번호 숨기기',
  loading: '로딩 중',
  nextSlide: '다음 슬라이드',
  numOptionsSelected: num => {
    if (num === 0) return '선택된 항목 없음';
    return `${num}개 항목 선택됨`;
  },
  previousSlide: '이전 슬라이드',
  progress: '진행',
  remove: '제거',
  resize: '크기 조정',
  scrollToEnd: '끝으로 스크롤',
  scrollToStart: '처음으로 스크롤',
  selectAColorFromTheScreen: '화면에서 색상 선택',
  showPassword: '비밀번호 표시',
  slideNum: slide => `슬라이드 ${slide}`,
  toggleColorFormat: '색상 형식 전환'
};

registerTranslation(translation);

export default translation;
