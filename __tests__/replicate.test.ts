import { Inputs } from '../src/inputs';
import { replicate } from '../src/replicate';

describe('#replicate', () => {
  describe('without image', () => {
    const defaultInputs: Inputs = {
      image: undefined,
      tag: '1.2.3',
      separator: ',',
    };

    describe('tag is "1.2.3.4"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2.3.4' });

        expect(result).toEqual('1.2.3.4,1.2.3,1.2,1');
      });
    });

    describe('tag is "1.2.3"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2.3' });

        expect(result).toEqual('1.2.3,1.2,1');
      });
    });

    describe('tag is "1.2"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2' });

        expect(result).toEqual('1.2,1');
      });
    });

    describe('tag is "1"', () => {
      it('returns "1"', () => {
        const result = replicate({ ...defaultInputs, tag: '1' });

        expect(result).toEqual('1');
      });
    });

    describe('tag is "v1.2.3.4"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2.3.4' });

        expect(result).toEqual('v1.2.3.4,v1.2.3,v1.2,v1');
      });
    });

    describe('tag is "v1.2.3"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2.3' });

        expect(result).toEqual('v1.2.3,v1.2,v1');
      });
    });

    describe('tag is "v1.2"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2' });

        expect(result).toEqual('v1.2,v1');
      });
    });

    describe('tag is "v1"', () => {
      it('returns "v1"', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1' });

        expect(result).toEqual('v1');
      });
    });

    describe('tag is "foo"', () => {
      it('returns "foo"', () => {
        const result = replicate({ ...defaultInputs, tag: 'foo' });

        expect(result).toEqual('foo');
      });
    });
  });

  describe('with image "foo/bar"', () => {
    const defaultInputs: Inputs = {
      image: 'foo/bar',
      tag: '1.2.3',
      separator: ',',
    };

    describe('tag is "1.2.3.4"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2.3.4' });

        expect(result).toEqual(
          'foo/bar:1.2.3.4,foo/bar:1.2.3,foo/bar:1.2,foo/bar:1',
        );
      });
    });

    describe('tag is "1.2.3"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2.3' });

        expect(result).toEqual('foo/bar:1.2.3,foo/bar:1.2,foo/bar:1');
      });
    });

    describe('tag is "1.2"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: '1.2' });

        expect(result).toEqual('foo/bar:1.2,foo/bar:1');
      });
    });

    describe('tag is "1"', () => {
      it('returns "foo/bar:1"', () => {
        const result = replicate({ ...defaultInputs, tag: '1' });

        expect(result).toEqual('foo/bar:1');
      });
    });

    describe('tag is "v1.2.3.4"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2.3.4' });

        expect(result).toEqual(
          'foo/bar:v1.2.3.4,foo/bar:v1.2.3,foo/bar:v1.2,foo/bar:v1',
        );
      });
    });

    describe('tag is "v1.2.3"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2.3' });

        expect(result).toEqual('foo/bar:v1.2.3,foo/bar:v1.2,foo/bar:v1');
      });
    });

    describe('tag is "v1.2"', () => {
      it('returns replicated tags', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1.2' });

        expect(result).toEqual('foo/bar:v1.2,foo/bar:v1');
      });
    });

    describe('tag is "v1"', () => {
      it('returns "foo/bar:v1"', () => {
        const result = replicate({ ...defaultInputs, tag: 'v1' });

        expect(result).toEqual('foo/bar:v1');
      });
    });

    describe('tag is "foo"', () => {
      it('returns "foo/bar:foo"', () => {
        const result = replicate({ ...defaultInputs, tag: 'foo' });

        expect(result).toEqual('foo/bar:foo');
      });
    });
  });
});
