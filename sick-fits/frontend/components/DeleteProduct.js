import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

// cache is the apollo cache, payload is what is returned from the update of the mutation
function update(cache, payload) {
  console.log(payload);
  console.log('running the update function after delete');
  // evict is a method on the cache, you need to pass it ref to the item - use identify and pass it the item
  // in most cases it takes the __typename and id to make a string like: Product:3jn34n3n4jkn32 (id)
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          //  go ahead and delete it
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
