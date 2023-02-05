import { Text } from '../Text';

export const CC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        paddingTop: 30,
      }}
    >
      <Text style={{ margin: 5, textAlign: 'center' }}>
        Nuestra aventura continúa en Japón, si queréis hacer el viaje más especial:
      </Text>
      <Text bold size="1.2em">
        ES6400495124642116438485
      </Text>
    </div>
  );
};
