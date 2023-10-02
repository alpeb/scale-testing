import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    rps_200: {
      executor: 'constant-arrival-rate',
      rate: 20,
      preAllocatedVUs: 50,
      duration: '1m',
    },
    rps_400: {
      startTime: '1m',
      executor: 'constant-arrival-rate',
      rate: 40,
      preAllocatedVUs: 100,
      duration: '1m',
    },
    rps_0: {
      startTime: '2m',
      executor: 'constant-arrival-rate',
      rate: 1,
      preAllocatedVUs: 1,
      duration: '1m',
    },
  },
};

export default function () {
  http.get('http://web-svc.emojivoto.svc.cluster.local/api/vote?choice=:ramen:');
};
