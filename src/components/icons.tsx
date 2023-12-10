import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsSpeakerFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaYoutube, FaBandcamp, FaMailBulk, FaSpotify, FaAmazon, FaMastodon } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";
import { GiMusicalScore, GiGuitarHead } from "react-icons/gi";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { SiApplemusic, SiJuce, SiProcessingfoundation, SiNiconico } from "react-icons/si";

interface LIconTypeProps {
  className: any;
}
export type LIconType = React.FC<LIconTypeProps>;

const LaBooth: LIconType = ({ className }: LIconTypeProps) => {
  return (
    <svg width="35" height="35" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="currentcolor"
        d="M212 1024C94.9156 1024 0 929.084 0 812V212C0 94.9156 94.9156 0 212 0H812C929.084 0 1024 94.9156 1024 212V812C1024 929.084 929.084 1024 812 1024H212ZM773.828 389.068V438.341L832 489.487V611.427H773.828V832H717.139V790.983C717.139 690.28 629.722 608.612 521.875 608.536H521.786H521.744H521.707C521.445 608.536 521.198 608.563 520.963 608.563C455.026 608.963 401.695 658.964 401.695 720.644L401.683 831.946L324.033 832V586.141H286.004C266.227 586.141 250.172 570.098 250.172 550.306V327.26H192V250.007H250.172V227.833H326.272V478.653L438.138 214.382L475.077 214.446L541.093 353.238L608.227 192H650.744L773.828 389.068Z"
      />
    </svg>
  );
};

const LaSuzuri: LIconType = ({ className }: LIconTypeProps) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      className={className}
    >
      <g transform="matrix(1.63671,0,0,1.63671,-462.312,-645.996)">
        <path d="M862.318,879.08L761.598,569.269L831.777,518.895L826.489,511.564L282.465,903.385L908.112,903.469L908.112,879.08L862.318,879.08ZM596.563,865.135C566.413,865.135 541.883,830.856 541.883,788.728C541.883,746.603 566.413,712.324 596.563,712.324C626.71,712.324 651.237,746.603 651.237,788.728C651.237,830.856 626.71,865.135 596.563,865.135ZM726.846,834.972C695.401,834.972 669.82,799.002 669.82,754.789C669.82,710.573 695.401,674.603 726.846,674.603C758.291,674.603 783.872,710.573 783.872,754.789C783.872,799.002 758.291,834.972 726.846,834.972ZM608.325,730.033C596.261,730.033 586.479,743.503 586.479,760.139C586.479,776.767 596.261,790.247 608.325,790.247C620.386,790.247 630.171,776.767 630.171,760.139C630.171,743.503 620.386,730.033 608.325,730.033ZM736.472,689.446C723.892,689.446 713.697,703.429 713.697,720.683C713.697,737.929 723.892,751.912 736.472,751.912C749.052,751.912 759.25,737.929 759.25,720.683C759.25,703.429 749.052,689.446 736.472,689.446Z" />
      </g>
    </svg>
  );
};

export const icons = {
  amazon: FaAmazon,
  appleMusic: SiApplemusic,
  bandcamp: FaBandcamp,
  bilibili: FaBilibili,
  booth: LaBooth,
  guitar: GiGuitarHead,
  instagram: FaInstagram,
  juce: SiJuce,
  mail: FaMailBulk,
  mastodon: FaMastodon,
  mic: PiMicrophoneStageFill,
  movie: BiSolidCameraMovie,
  niconico: SiNiconico,
  processing: SiProcessingfoundation,
  question: BsFillPatchQuestionFill,
  score: GiMusicalScore,
  speaker: BsSpeakerFill,
  spotify: FaSpotify,
  suzuri: LaSuzuri,
  twitter: FaTwitter,
  youtube: FaYoutube,
};
